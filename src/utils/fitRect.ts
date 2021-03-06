/**
 * Fits one rectangle into another
 * @param  {Array} rect   [x,y,w,h]
 * @param  {Array} target [x,y,w,h]
 * @param  {String} mode   ['contain' (default) or 'cover']
 * @return {Array}        [x,y,w,h]
 */
export function fitRect(
    rect: number[],
    target: number[],
    mode?: 'cover' | 'contain'
) {
    mode = mode || 'contain';

    var sw = target[2] / rect[2];
    var sh = target[3] / rect[3];
    var scale = 1;

    if (mode == 'contain') {
        scale = Math.min(sw, sh);
    } else if (mode == 'cover') {
        scale = Math.max(sw, sh);
    }

    return [
        target[0] + (target[2] - rect[2] * scale) / 2,
        target[1] + (target[3] - rect[3] * scale) / 2,
        rect[2] * scale,
        rect[3] * scale,
    ];
}
