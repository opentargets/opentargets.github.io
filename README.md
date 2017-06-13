# Open Targets main website

This is a static site, built with [Jekyll](https://jekyllrb.com) and deployed thanks to [Netlify Open Source Plan](https://www.netlify.com)

## Developing

Similarly to [github-pages setup](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) you can use bundler to install all dependencies, including jekyll:

```sh
gem install bundler
```

Once you have bundler installed, you can clone the repo and rely on the `Gemfile.lock` file present there:
```sh
git clone https://github.com/opentargets/opentargets.github.io.git
cd opentargets.github.io
bundle install
```

Now you should be able to serve the website locally, watching for file changes:
```sh
bundle exec jekyll serve --watch
```

## Deploying
Any PR will generate a [deploy preview](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) in netlify. The URL for each deploy preview will show up in the comment of the PR. 

Master branch is in sync with production, however deploys to production are currently locked and will not automatically sync. 
When a PR to master is merged, to deploy the changes one needs to unlock/lock in the netlify interface.
