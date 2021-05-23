export const filterObjectList = (objectList, key, value) => {
	var result = [];
	if (
		objectList !== undefined &&
		objectList !== null &&
		objectList.length > 0
	) {
		result = objectList.filter((obj) => obj[key] === value);
	}
	return result;
};

export const filterObjectListById = (objectList, id) => {
	var result = [];
	var obj = {};
	if (
		objectList !== undefined &&
		objectList !== null &&
		objectList.length > 0
	) {
		result = objectList.filter((obj) => obj.id === id);
		if (result !== undefined && result !== null && result.length > 0) {
			obj = result[0];
		}
	}
	return obj;
};

export const replaceObjectListByKey = (objectList, object, key) => {
	if (objectList.length < 1) {
		objectList.push(object);
	} else {
		for (let i = 0; i < objectList.length; i++) {
			if (objectList[i][key] === object[key]) {
				objectList[i] = object;
				break;
			}
		}
	}
	return objectList;
};
