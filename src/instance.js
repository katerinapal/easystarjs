var mod_anonymus = function() {
    this.pointsToAvoid = {};
    this.startX;
    this.callback;
    this.startY;
    this.endX;
    this.endY;
    this.nodeHash = {};
    this.openList;
};

/**
 * Represents a single instance of EasyStar.
 * A path that is in the queue to eventually be found.
 */
export { mod_anonymus as instance };