<h1 align="center">
  <br>

  <br>
  Portfolio OS Theme - Windows
  <br>
</h1>

<h4 align="center">A customizable portfolio website based on Microsoft Windows 10 theme.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>  
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#customization">Customization</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a> •
  <a href="https://srinibasbiswal.com/">Live Demo</a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/18086651/120920034-63889e00-c6da-11eb-8dfa-1e97a9b0a829.gif" alt="srinibas-pwa-gif" />
</p>

## Installation

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/srinibasbiswal/Portfolio_OS_Theme

# Go into the repository
$ cd Portfolio_OS_Theme

# Install dependencies
$ npm install

# Run the app
$ npm start

# Build the app
$ npm run build
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Customization

1. Configuring User Data<br/>
Replace the configuration with your details by changing in [user.config.js](src/utils/data/user.config.js) 

2. Configuring App Settings<br/>
Configure the App settings like enable/disable or showing the sidebar by changing in  [apps.config.js](src/utils/data/apps.config.js)

3. Configuring Wallpaper Settings<br/>
Configure the wallpapers in [apps.config.js](src/utils/data/apps.config.js)

3. Configuring Firebase Analytics<br/>
Enable/disable the analytics by configuring in [project.config.js](src/utils/data/project.config.js)

5. Configuring Firebase Account<br/>
`Note: This step can be skipped if analytics is disabled in step 4.`<br/>
Add `.env` file with the following firebase config

```sh
REACT_APP_APIKEY = firebase_apikey
REACT_APP_AUTH_DOMAIN = firebase_auth_domain
REACT_APP_DATABASE_URL = firebase_database_url
REACT_APP_PROJECT_ID = firebase_project_id
REACT_APP_STORAGE_BUCKET = firebase_storage_bucket
REACT_APP_MESSSAGING_SENDER_ID = firebase_messaging_sender_id
REACT_APP_APP_ID = firebase_app_id
REACT_APP_MEASUREMENT_ID = firebase_measurement_id
```

6. Configuring EmailJS account
In the `.env` file add the emailJS account template id as below.
```sh
REACT_APP_EMAILJS_KEY = email_js_key
```

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## License

MIT

---

> [srinibasbiswal.com](https://srinibasbiswal.com) &nbsp;&middot;&nbsp;
> GitHub [@srinibasbiswal](https://github.com/srinibasbiswal) &nbsp;&middot;&nbsp;
> LinkedIn [@/in/srinibasbiswal](https://www.linkedin.com/in/srinibasbiswal/)

