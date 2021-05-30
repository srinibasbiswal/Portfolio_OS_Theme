import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.jpg";

class SettingDocument {
	constructor() {
		this.currentWallpaper = default_wallpaper;
		this.isMute = false;
		this.wifiEnabled = true;
		this.airplaneMode = true;
	}
}

export default SettingDocument;
