enum ImageFormats {
    Png = 'png',
    Jpeg = 'jpeg',
}

interface IResolution {
    width: number;
    height: number;
}

interface IImageConvertion extends IResolution {
    format: ImageFormats;
}

class ImageBuilder {
    private formats: ImageFormats[] = []
    private resolutions: IResolution[] = [];

    addPng() {
        if (this.formats.includes(ImageFormats.Png)) {
            return this;
        }
        this.formats.push(ImageFormats.Png);
        return this;
    }

    addJpeg() {
        if (this.formats.includes(ImageFormats.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormats.Jpeg);
        return this;
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({width, height});
        return this;
    }

    build(): IImageConvertion[] {
        const res: IImageConvertion[] = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    height: r.height,
                    width: r.width,
                })
            }
        }

        return res;
    }
}

const ib = new ImageBuilder();
const result = ib
    .addJpeg()
    .addPng()
    .addResolution(10, 20)
    .addResolution(30, 40)
    .build();
console.log('result', result);