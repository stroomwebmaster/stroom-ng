# blog

## CLI Commands

``` bash
# install dependencies
npm install 
# on dependency errors, run this as temp workaround
npm install --legacy-peer-deps

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

### How to setup Netlify CMS

- Deploy on netlify using the CLI or the Netlify bot for [github](https://app.netlify.com/start).

- Enable Git gateway https://docs.netlify.com/visitor-access/git-gateway/.

- Enable Identity for your app https://docs.netlify.com/visitor-access/identity/.

- For most Blogs, change (Identity > Settings > Registration preferences) to invite only.

- Invite yourself to the Identity tab in Netlify console.

- Accept the invite from you mail.

- Done 👍🏻.

*Note:* Go to `https://stroom-ng.netlify.app/admin#/` in order to access Netlify CMS...

