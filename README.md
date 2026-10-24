# Antumi Pets

Antumi 的可选宠物资源仓库，当前包含 MOSS 和 ZIP 两套。角色的图片、动作配准和头眼参数单独发布，行为、走路、跳跃与鼠标互动由 Antumi 共用的引擎执行。包内不包含可执行程序。

默认软陶的图集和配置保留在 Antumi 主仓库，随应用安装，本仓库不重复维护或打包。MOSS 和 ZIP 通过设置 → Pet 首次选择时下载，之后从本地读取。资源安装在 `ANTUMI_HOME/pets/<id>/<version>/`。

## 构建

需要 Node.js 22.13 以上，无 npm 依赖。

```sh
node scripts/build.mjs
node --test scripts/*.test.mjs
```

构建生成 `dist/<id>-1.0.0.zip` 和 `dist/catalog.json`，并更新各宠物的 `manifest.json`。ZIP 文件顺序和时间固定，相同输入产生相同 SHA-256。已有版本发布后保持内容不变；修改图片或配准时增加版本号。

`pets/` 保存原始图集、136px 小预览和 `rig.json`。目录中的 `manifest.json` 与仓库根目录的 `catalog.json` 是构建生成的分发描述，保留在 Git 中，供 Antumi 读取和离线回退。

## 分发约定

- 目录：`https://raw.githubusercontent.com/flyhero/antumi-pets/main/catalog.json`。
- 附件：GitHub Release `pets-v1.0.0` 下的 `moss-1.0.0.zip` 与 `zip-1.0.0.zip`。
- Antumi 按目录中的固定版本 URL 下载，先检查整个包的大小及 SHA-256，再检查每张图集与配置。
- 目录包含小预览图的数据，不会让浏览设置的用户下载完整图集。
- 发布资源不触发 Antumi 应用发版。当前目录尚未推送，附件尚未发布；这些地址是分发约定。

## Format 1

每个 ZIP 的根目录仅允许四个普通文件：

| 文件 | 内容 |
|---|---|
| `manifest.json` | 格式、ID、版本、中英文名称和描述、头眼参数及各图集的大小和 SHA-256 |
| `poses.webp` | 1024×1024，4×4 格，每格 256px |
| `walk.webp` | 1024×768，4×3 格十二帧步态 |
| `face.webp` | 288×80，局部面部材质 |

动作位置依次为站立、等待、工作、查看、失落、挥手、跳跃、坐下、打盹、攀附、保留格、冲刺，最后一行是旧步态。实际行走使用独立的十二帧图集；探头复用站姿头部。

`rig.json` 保存头部矩形、站姿及每帧步态的颈部和脚底锚点、各表情的眼睛参数、局部材质偏移、配色与手臂裁切边界。图集坐标基于 256px 单格。眼睛支持保留原虹膜、绣眼及平面漫画三种渲染方式。

Format 1 的校验定义位于 Antumi 的 `packages/protocol/src/pet.ts`。不接受 JS、脚本、符号链接、越界路径或额外文件。新的角色只要遵守这一格式与现有渲染能力，就不需要为其增加独立插件进程。

## 本地联调

Antumi core 支持显式配置 `ANTUMI_PET_DIRECTORY` 为本仓库的 `dist/`。此时目录刷新和安装读取本地文件，其余校验、版本存储和 UI 与远程下载一致。不要把此变量用于正式分发。

在 Antumi 仓库运行以下命令会启动一套使用测试数据的开发版：

```sh
ANTUMI_HOME=~/.antumi-demo ANTUMI_PET_DIRECTORY=~/ai-projects/antumi-pets/dist pnpm dev
```
