class OrchidDetailsController {
    constructor($orchidService, $stateParams) {
        this.orchidService = $orchidService;
        let id = $stateParams["id"];
        this.orchid = $orchidService.getOrchid(id); 

    }
    
}