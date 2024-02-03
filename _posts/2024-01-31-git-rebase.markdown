---
layout: post
title:  "git rebase"
date:   2024-02-03 18:36:10 +1300
categories: [git]
---

**two git utilities that specialize in integrating changes from one branch onto another**
> git merge: forward moving change records

> git rebase: rewrite commit history

**What is git rebase?**
> Move a sequence of commits onto a new base commit

**What is the most useful context of git rebase?**
> feature branching workflow

**Primary reason for rebasing**
> To maintain a linear project history, which gives a later benefit of a clean merge of your feature branch back into the main branch.

**For example**
> The main branch has progressed since I started my feature branch. I want to get the latest updates from main branch into my feature branch, and I want to keep my branch's history clean so it appears as if I have been working off the latest main branch. This give a later benefit of a clean merge of my feature branch back into main branch.

**Why do we want to maintain a "clean History"?**
> when performing gi operations to investigate the introduction of a regression.

**two options for integrating your feature into the progressed main branch**
> merge directly, resulting in a three way merge and a merge commit
> rebase, then merge. resulting in a fast-forward merge and a perfectly linear history.

**Which one result in a perfectly linear history**
> rebase and merge

**rebasing is like saying:**
> "I want to base my changes on what everybody has already done."

**git rebase standard vs git rebase interactive**
> interactive rebasing gives complete control over what your project history looks like. This affords a lot of freedom to developers, as it lets them commit a "messy" history while they are focused on writing code, then go back and clean it up after the fact.

> Most developers like to use an interactive rebase to polish a feature branch before merging it into the main code base. This gives them the opportunity to squash insignificant commits, delete obsolete ones, and make sure everything else is in order before committing to the “official” project history. To everybody else, it will look like the entire feature was developed in a single series of well-planned commits.

> The real power of interactive rebasing can be seen in the history of the resulting main branch. To everybody else, it looks like you're a brilliant developer who implemented the new feature with the perfect amount of commits the first time around. This is how interactive rebasing can keep a project's history clean and meaningful.

### Resources:

[atlassian git tutorials](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
