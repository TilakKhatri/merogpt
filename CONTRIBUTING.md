# Contributing to Readme Markdown Generator

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
please follow it in all your interactions with the project.

## Table of Contents

- [Setting Up the project locally](#setting-up-the-project-locally)
- [Submitting a Pull Request](#submitting-a-pull-request)

## Setting Up the project locally

To install the project you need to have `node` and `npm`

1.  [Fork](https://github.com/TilakKhatri/ai_system) the project, clone
    your fork:

    ```sh
    # Clone your fork
    git clone git@github.com:TilakKhatri/ai_system.git

    # Navigate to the newly cloned directory
    cd ai_sytem
    ```

2.  Your environment needs to be running `node` version latest and `npm` version >= 5.5.0.

3.  from the root of the project: `npm`or `yarn` to install all dependencies

    - make sure you have latest `npm` version
    - make sure you have latest `yarn` version

4.  from the root of the project: `npm start` to run the cli.

> Tip: Keep your `master / main` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream https://github.com/TilakKhatri/ai_system.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main
> ```
>
> This will add the original repository as a "remote" called "upstream," then
> fetch the git information from that remote, then set your local `main`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `main` branch.
> Whenever you want to update your version of `main`, do a regular `git pull`.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if somebody else is already working on it.

Also, make sure to run the tests and lint the code before you commit your
changes.

```sh
npm run test | yarn test
npm run lint | yarn link
yarn dev
```
