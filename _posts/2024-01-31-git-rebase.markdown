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

> interactive rebasing gives complete control over what the project history looks like. Developers can clean up messy commits history while they were focused on writting code.

> By squashing insignificant commits, deleting obsolete ones before committing to "official" project history, to everybody else, it will look like the entire feature was developed in a single series of well-planned, perfect amount of commits the first time wround. 

>This is how interactive rebasing can keep project history meaningful.

### Resources:

[atlassian git tutorials](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
