# MOSS 打字姿势

使用内置 `image_gen` 生成，参考 `poses.webp` 的毛毡角色。原始画布 1254 × 1254、透明背景，等比缩小为 512 × 512 后由浏览器 Canvas 导出 WebP（质量 0.95）。

- `typing.webp`：双手放在毛毡电脑键盘上的完整姿势。
- `typing-base.webp`：移除双臂并补全胸部与键盘的固定底图。

## 完整姿势提示词

Use case: stylized-concept. Create ONE production desktop pet sprite on genuine transparent background. The reference atlas is ONLY a character/style identity reference, do NOT copy its grid. Draw the SAME MOSS felt ant as ONE whole character, three-quarter profile facing RIGHT, sitting with two lavender felt feet at the bottom and a small laptop resting across its knees. Exact identity: round cream wool-felt head, tiny black sewn bead eyes, tiny embroidered smile, faint rosy cheeks, sage/mint green wool body and large dark sage striped round abdomen, two sage felt antennae with lavender pompom tips, small cream felt mitten hands. Preserve handmade needle-felt fibers and soft plush toy texture, NOT glossy plastic or clay. Laptop is a miniature beautiful pale lavender and cream FELT toy with a dark inset screen, rounded edges and small raised felt keyboard keys, consistent material and lighting; no text, symbols, logos, outline, table, pedestal or decoration. CRITICAL: both arms reach FORWARD AND DOWN, two DISTINCT SEPARATED palms/mitten hands lying flat and facing DOWN on TWO different keyboard areas. Hands are NOT cupped, NOT touching each other, NOT at chest height. Elbows bent; shoulder-to-keyboard arms clearly visible and do not cross. Instantly read as TYPING at 80px. Focused eyes look at screen. Full character and laptop fit in a square, small transparent margins, feet on stable common baseline at 94% height. Ant remains main subject, laptop smaller than head. Single character, no atlas, no labels, no background, no extra objects. Soft studio lighting upper left.

## 动画底图提示词

Use case: precise-object-edit. Make the clean base layer of a layered typing animation from the supplied sprite. Remove ONLY both entire arms including both hands from shoulders down to the keyboard, and reconstruct the torso, keyboard keys, and transparent gaps they covered. Keep every other part pixel-stable: identical head, eyes, antennae, smile, abdomen, legs, feet, laptop case/screen/base and visible keys, same lighting, texture, canvas dimensions, position and scale. Do NOT move, resize or redesign the sprite. No hands or forearms remaining. No added objects. This clean plate will receive the original two arms back as independently animated layers. Preserve actual transparency.
