class OrchidService {
    constructor($resource) {
        this.orchidResource = $resource("/api/Orchids/:id", null, { 'update': { method:'PUT' } });
    }

    getOrchids() {
        return this.orchidResource.query();
    }

    getOrchid(id) {
        return this.orchidResource.get({ id: id });
    }

    addOrchid(orchid, success) {
        this.orchidResource.save(orchid, success);
    }

    updateOrchid(orchid, success, error) {
        this.orchidResource.update({ id: orchid.orchidId }, orchid, success, error);
    }

    deleteOrchid(id, success) {
        this.orchidResource.delete({ id: id }, success);
    }
}
