class AboutController {
    constructor($orchidService, $state) {
        this.orchidService = $orchidService;
        this.orchids = this.orchidService.getOrchids();
        this.orchid = this.newOrchid();
        this.state = $state;
        this.about = this.newAbout();
    }

    getOrchid(id) {
        this.state.go("orchidDetails", { id: id });
    }

    newAbout() {
        return {
        title: "",
        content: "",
        imgUrl: "",
        }
    }

    newOrchid() {
        return {
            name: "",
            description: "",
            price: 0,
            quantity: 0,
            imgUrl: "",
        }
    }

    addOrchid() {
        this.orchidService.addOrchid(this.orchid, res => {
                    this.state.go("shopOrchids");
        })
    }

    deleteOrchid(id) {
        this.orchidService.deleteOrchid(id, res => {
                    this.state.go("shopOrchids");
        })
    }
}