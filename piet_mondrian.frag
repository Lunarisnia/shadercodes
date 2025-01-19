uniform vec2 u_resolution;

vec3 draw_square(vec2 uv, float x1, float y1, float w, float h) {
    vec4 borders = vec4(step(vec2(x1, y1), uv), step(vec2(1.0 - w, 1.0 - h), 1.0 - uv));
    vec3 square = vec3(borders.x * borders.y * borders.z * borders.w);
    return square;
}

vec3 draw_square_line(vec2 uv, float x1, float y1, float w, float h, float lineWidth) {
    lineWidth = lineWidth / 100.0;

    float lDiff = 1.0 - x1;
    float lNegative = step(lDiff + lineWidth, 1.0 - uv.x);

    float bDiff = 1.0 - y1;
    float bNegative = step(bDiff + lineWidth, 1.0 - uv.y);

    float wInv = 1.0 - w;
    float wNegative = step(w + lineWidth, uv.x);

    float hInv = 1.0 - h;
    float hNegative = step(h + lineWidth, uv.y);

    float r = step(wInv, 1.0 - uv.x);
    r = r + wNegative + hNegative + bNegative;

    float t = step(hInv, 1.0 - uv.y);
    t = t + hNegative + lNegative + wNegative;

    float l = step(x1, uv.x);
    l = l + lNegative + bNegative + hNegative;

    float b = step(y1, uv.y);
    b = b + bNegative + lNegative + wNegative;

    return vec3(l * b * t * r);
}

vec3 convertColor(vec3 color) {
    return 1.0 - color;
}

// TODO: I still can't figure out how to make two square with different color, this is harder than I thought
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 red = vec3(172.0, 33.0, 35.0) / 256.0;
    vec3 cream = vec3(239.0, 230.0, 213.0) / 256.0;
    vec3 yellow = vec3(247.0, 203.0, 39.0) / 256.0;
    vec3 blue = vec3(0.0, 95.0, 156.0) / 256.0;

    vec3 sq1 = draw_square_line(uv, 0.0, 0.8, 0.15, 1.0, 8.0);
    vec3 sq2 = draw_square_line(uv, 0.4, 0.1, 0.9, 0.9, 8.0);
    // vec3 sq2 = draw_square_line(uv, 0.4, 0.2, 0.9, 0.4, 3.0);
    // vec3 sq3 = draw_square_line(uv, 0.1, 0.3, 0.8, 0.8, 3.0);

    vec3 color = mix(vec3(0.0), red, sq1.x * sq1.y * sq1.z);

    gl_FragColor = vec4(color, 1.0);
}
