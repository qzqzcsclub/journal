# 项目结构草案

本项目旨在通过 GitHub 管理期刊编辑和发布，由 GitHub 仓库提供文章存储、稿件审查、期刊编辑、LaTeX 模版支持以及版本控制等功能。以下为该项目目录结构的初步设计。

## 目录结构

```
project/
├── draft/                        # 草稿文章存放目录
│   ├── author - title/           # 单篇文章目录，命名格式为“作者 - 标题”
│   │   ├── article.tex
│   │   ├── references.bib
│   │   └── ...
│   └── ...                       # 其他文章
├── issues/                       # 期刊目录
│   ├── 2024(1)/                  # 期刊明明格式为“年份(期号)”
│   │   ├── articles/             # 该期刊包含的文章
│   │   │   ├── xxx/
│   │   │   │   └── ...
│   │   │   └── yyy/
│   │   │   │   └── ...
│   │   └── issue.tex             # 该期刊的 LaTeX 主文件
│   ├── 2024(2)/                  # 下一期期刊目錄
│   └── ...
├── templates/                    # LaTeX 模板文件
│   ├── article-template.tex      # 单篇文章模板
│   ├── issue-template.tex        # 期刊模板
│   └── style.sty                 # 样式文件
├── outputs/                      # 已编译的输出文件（PDF）
│   ├── 2024(1).pdf               # 2024 年第一期 PDF 文件
│   ├── 2024(2).pdf               # 2024 年第二期 PDF 文件
│   └── ...
├── README.md                     # 项目介绍与指引
├── CONTRIBUTING.md               # 项目贡献指南
├── Fundamentals-of-Journal.md    # 社刊大纲
├── git-conventional-commits.yaml # Git commits 规范文件
├── .gitignore                    # Git 忽略文件设置
└── ...                           # 其它杂项
```

## 分支策略

1. `main` 分支：用于存放已发布的期刊和其它文件。
2. `editing-{Year(Issue)}` 分支：用于编辑特定期刊，如 `editing-2024(1)`。
3. `draft` 分支：用于提交和管理草稿文章，未分配到具体期刊的草稿文件存放在此。

## Commit 规范

参考 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)，一个良好的 commit 信息应该形如：

```
<type>: <description>
```

其中 `<type>` 可以为：

- `chore`：杂项，如 `.gitignore` 等文件
- `docs`：文档，如 `README.md`
- `refactor`：重构
- `style`：格式化，但是不影响输出

以下为待定的 `<type>`：

- `template`：LaTeX 模板文件
- `article`：文章相关
- `issue`：期刊相关

