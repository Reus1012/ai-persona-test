# 发布到 GitHub Pages（网页版，一步一步）

这套页面是纯静态的，不需要服务器、不需要数据库，也不需要买域名。

当前已经按这个地址配置好：

```text
https://reus1012.github.io/ai-persona-test/
```

如果你的 GitHub 用户名或仓库名不同，最后需要改 `index.html` 里的两处地址。

---

## 第 0 步：先在电脑上看一眼（可选）

打开 Terminal：

```bash
cd /Users/ryanlee/Documents/deepseek-harness/default-workspace/ai-persona-test
python3 -m http.server 8780
```

浏览器打开：

```text
http://127.0.0.1:8780/
```

确认封面、答题、结果、分享图都能用。

---

## 第 1 步：创建 GitHub 仓库

1. 打开 https://github.com/new
2. Repository name 填：

```text
ai-persona-test
```

3. 选择 **Public**
4. **不要**勾选 Add a README、Add .gitignore、Choose a license
5. 点 **Create repository**

---

## 第 2 步：上传页面文件

1. 进入空仓库，点 **Add file → Upload files**
2. 打开 Finder 这个文件夹：

```text
/Users/ryanlee/Documents/deepseek-harness/default-workspace/ai-persona-test
```

3. 选中以下文件，拖进上传页面：

```text
index.html
styles.css
app.js
README.md
PUBLISH.md
cover.png
quiz.png
result.png
result-mobile.png
mobile-cover.png
mobile-quiz.png
mobile-share.png
gallery.png
card.png
```

**注意：拖文件夹里面的文件，不要把 `ai-persona-test` 这个父文件夹整个拖进去。**  
**不要把 `.nojekyll` 一起拖进去。** 它是 0 字节隐藏文件，GitHub 上传器可能报 “Something went really wrong, and we can't process that file”。`.nojekyll` 在第 3 步用网页新建。

4. 下方 Commit changes 填：

```text
Initial release: AI persona test
```

5. 点 **Commit changes**

---

## 第 3 步：创建 .nojekyll

这个文件是隐藏文件，Finder 默认看不到，直接在网页上建：

1. 仓库根目录 → **Add file → Create new file**
2. 文件名填：

```text
.nojekyll
```

3. 内容随便写一行：

```text
# static site
```

4. Commit。

---

## 第 4 步：检查地址配置

当前 `index.html` 里已经写的是：

```text
https://reus1012.github.io/ai-persona-test/
```

如果你用的不是 `Reus1012` 或不是 `ai-persona-test` 这个仓库名：

1. 打开仓库里的 `index.html`
2. 点右上角铅笔图标
3. 搜索 `reus1012.github.io/ai-persona-test`
4. 全部替换成你的真实地址，例如：

```text
https://你的用户名.github.io/你的仓库名/
```

5. Commit。

需要确保 `og:image` 指向：

```text
https://你的地址/cover.png
```

`og:url` 指向：

```text
https://你的地址/
```

---

## 第 5 步：开启 GitHub Pages

1. 仓库页面 → **Settings**
2. 左侧 **Pages**
3. **Source** 选 **Deploy from a branch**
4. **Branch** 选 `main`
5. 目录选 `/ (root)`
6. 点 **Save**
7. 等 1–3 分钟

页面顶部会出现：

```text
Your site is live at https://reus1012.github.io/ai-persona-test/
```

打开这个地址，确认电脑上能看到封面。

---

## 第 6 步：用手机微信测试

1. 在电脑微信里把链接发到 **文件传输助手**：

```text
https://reus1012.github.io/ai-persona-test/
```

2. 在手机微信里点开；
3. 完整答完 20 题；
4. 点 **生成分享图**；
5. 长按图片 → **保存图片**；
6. 回到微信，把图片发给朋友或发朋友圈。

如果打开的是旧版本，链接后面加 `?v=2`：

```text
https://reus1012.github.io/ai-persona-test/?v=2
```

---

## 第 7 步：分享时怎么发

### 推荐：发图片

1. 完成测试；
2. 生成分享图；
3. 长按保存；
4. 微信发图 + 一句文案：

```text
我测出来是「赛博包工头」，AI 眼中的我：一个把聊天框当项目管理软件的人。你是什么？
```

### 链接分享

也可以直接发链接，但微信对**链接卡片的标题/缩略图**有额外限制：自定义卡片需要公众号 + 微信 JS-SDK + 后端签名。当前纯静态版没有这套服务，所以链接分享的预览不保证和页面一致。

主路径还是：**分享图 + 文案**。

---

## 第 8 步：以后怎么更新

1. 在 GitHub 仓库里点开对应文件；
2. 右上角铅笔编辑；
3. 修改后 Commit；
4. GitHub Pages 会自动重新发布；
5. 微信里加 `?v=3` 强制刷新。

---

## 常见问题

**打开是 404？**

- Settings → Pages 是否已经 Save；
- Branch 是否 `main`，目录是否 `/ (root)`；
- 仓库根目录是否有 `index.html`。

**页面没有样式/图片？**

- `styles.css`、`app.js` 和各张 png 是否都在仓库根目录；
- 文件名大小写是否和代码一致。

**手机微信里没有生成分享图？**

- 先确认页面完全加载；
- 点结果页的 **生成分享图**；
- 如果弹层没出来，换 Chrome/Safari 打开同一链接，先保存图片再发。

**微信里长按没有保存选项？**

- 确认长按的是弹层里的图片，不是背景；
- 部分微信版本需要长按后选“保存图片”；
- 也可以在电脑上打开链接，点“下载 PNG”，再把图片发到手机。

**链接分享没有缩略图？**

这是微信 JS-SDK 的限制，不是页面坏了。静态版用图片分享卡替代。

**能用自己的域名吗？**

可以。Settings → Pages → Custom domain 填域名，并在域名服务商处配置 CNAME；先让 GitHub Pages 默认地址跑通，再换自定义域名。
