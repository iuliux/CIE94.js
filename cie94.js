/*
 * Computes CIE94 distance between 2 colors in LAB space.
 * 
 * p1 = [l1, a1, b1]
 * p2 = [l2, a2, b2]
 * Returns distance:float
 *
 * Usage example:
 *     var d = CIE94_dist([94.0, -0.1, -0.55], [77.0, 0.5, 0.45])
 *
 * Iulius Curt, april 2013
 */


var CIE94_dist = function(p1, p2) {
    var l1 = p1[0], a1 = p1[1], b1 = p1[2],
        l2 = p2[0], a2 = p2[1], b2 = p2[2];
    var kl = 2.0, k1 = 0.048, k2 = 0.014;

    var dL = l1 - l2,
        C1 = Math.sqrt(a1*a1 + b1*b1),
        C2 = Math.sqrt(a2*a2 + b2*b2),
        dCab = C1 - C2,
        da = a1 - a2,
        db = b1 - b2,
        dHab = Math.sqrt(da*da + db*db - dCab*dCab),
        E = Math.sqrt(Math.pow(dL / kl, 2) +
                Math.pow(dCab / (1 + k1 * C1), 2) +
                Math.pow(dHab / (1 + k2 * C1), 2));
    return E;
};