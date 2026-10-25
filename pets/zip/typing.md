# ZIP 打字姿势

使用内置 `image_gen` 生成，参考 `poses.webp` 的漫画角色。原始画布 1254 × 1254、透明背景，修正为两根触角后等比缩小为 512 × 512，由浏览器 Canvas 导出 WebP（质量 0.95）。

- `typing.webp`：双手放在漫画电脑键盘上的完整姿势。
- `typing-base.webp`：移除双臂并补全身体与键盘的固定底图。

## 完整姿势提示词

Use case: stylized-concept. Create ONE production desktop pet sprite on genuine transparent background. Supplied atlas is ONLY a character identity and drawing-style reference; do NOT reproduce its grid. Draw the EXACT SAME ZIP comic ant, ONE whole character, three-quarter profile facing RIGHT, sitting low with both yellow cartoon shoes at bottom and a compact laptop resting across knees. Preserve reference: slim dark NAVY BLUE body and round-corner triangular navy head, huge pale cream oval eyes with navy pupils, yellow mittens, long navy antennae ending in yellow drops, round coral/orange abdomen with broad navy bands. Same clean hand-drawn 2D cartoon, confident dark navy outlines, flat warm fills, restrained cel shading. Absolutely NO 3D/clay/felt material, photorealism, gradients, glow or glossy toy effects. Laptop must match the same 2D comic style: compact cream case, dark navy screen, clean navy outline, small separated keys, a few coral details if useful; NO text, logos, coding symbols or stand/table. CRITICAL POSE: both slender arms reach FORWARD AND DOWN, TWO SEPARATE yellow mitten palms face DOWN and rest on TWO different areas of keyboard, slightly bent elbows. Hands MUST NOT be cupped together, touching, or held at chest height. Both arms clearly visible and uncrossed, ready for independent animation. Alert focused expression looking at screen, small friendly smile. Entire character and laptop in square image, small transparent margins, both feet at stable common baseline 94% height. Ant remains main subject, laptop smaller than head. Must instantly read as typing at 80px. No grid, extra characters, labels, effects or background.

## 触角修正提示词

Use case: precise-object-edit. Correct ONE identity error in this sprite: the ant must have EXACTLY TWO antennae, like the reference character. There are currently three. Remove ONLY the EXTRA TOP-CENTER antenna: the long navy stalk rising from the middle of the head upward to the highest yellow drop near the top-right. Preserve the TWO LOWER antennae arching left and right, with their yellow ends, exactly as they are. Restore transparent background where the removed antenna used to be. Keep ALL other pixels unchanged: head contour, eyes, face, arms, hands on keyboard, seated body, abdomen, laptop, legs, feet, lighting, colors, size, position and square canvas. No new objects, no other edits, genuine transparency.

## 动画底图提示词

Use case: precise-object-edit. Make the clean base layer of a layered typing animation from the supplied sprite. Remove ONLY both entire arms including both hands from shoulders down to the keyboard, and reconstruct the torso, keyboard keys, and transparent gaps they covered. Keep every other part pixel-stable: identical head, eyes, antennae, smile, abdomen, legs, feet, laptop case/screen/base and visible keys, same lighting, texture, canvas dimensions, position and scale. Do NOT move, resize or redesign the sprite. No hands or forearms remaining. No added objects. This clean plate will receive the original two arms back as independently animated layers. Preserve actual transparency.
