window.VersionController = (function() {
    /**
     * Information about this class...
     */
    function VersionController() {
        this.version = "0.1";

        this.getVersion = function () {
            return this.version;
        }
    }

    return VersionController;
}());