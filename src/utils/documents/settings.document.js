import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.jpg";

class SettingDocument {
	constructor() {
		const savedThemeMode = localStorage.getItem("portfolio-theme-mode");
		this.currentWallpaper = default_wallpaper;
		this.currentWallpaperId = "default_wall";
		this.themeMode =
			savedThemeMode === "light" || savedThemeMode === "dark"
				? savedThemeMode
				: "dark";
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
