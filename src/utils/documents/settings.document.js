import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.jpg";

class SettingDocument {
	constructor() {
		this.currentWallpaper = default_wallpaper;
		this.currentWallpaperId = "default_wall";
		this.isMute = false;
		this.wifiEnabled = true;
		this.bluetoothEnabled = true;
		this.airplaneMode = false;
		this.doNotDisturb = false;
		this.brightness = 75;
		this.volume = 50;
	}
}

export default SettingDocument;
