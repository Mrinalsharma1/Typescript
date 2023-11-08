abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    abstract getBrightness(): void

    getReelTime(): number {
        return 8
    }
}

// const hc=new TakePhoto('','')Error- we can not directly create the object of instance class

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public level: number,
    ) {
        super(cameraMode, filter)
    }
    getBrightness(): void {
        console.log('bright')
    }
}

const obj = new Instagram('', '', 2)
obj.getReelTime() //we can access method using clild class object