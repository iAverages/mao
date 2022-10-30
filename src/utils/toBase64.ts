const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (!reader.result) {
                reject("Failed to get file");
                return;
            }

            let data;
            if (reader.result != "string") {
                data = reader.result.toString();
            } else {
                data = reader.result;
            }

            const commaIndex = data.indexOf(",");
            if (commaIndex == -1) {
                reject("Uploaded file did not get converted to data url format");
                return;
            }

            const base64 = data.substring(commaIndex + 1);
            resolve(base64);
        };

        reader.onerror = (error) => reject(error);
    });

export default toBase64;
