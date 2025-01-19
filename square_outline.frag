uniform vec2 u_resolution;
uniform float u_time;

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

    return vec3(l * b * r * t);
}

vec3 square_wave(vec2 uv) {
    vec3 color = vec3(1.0);
    color *= draw_square_line(uv, 0.1, 0.1, 0.9, 0.9, 1.0);
    for (int i = 0; i < 10; i++) {
        float offset = ((float(i) * 0.2) + u_time) / 2.0;
        float y1 = fract(0.1 - offset);
        if (y1 < 0.1) {
            y1 = 0.1;
        }
        float w = fract(0.9 + offset);
        if (w > 0.9) {
            w = 0.9;
        }
        color *= draw_square_line(uv, 0.1, y1, w, 0.9, 1.0);
    }
    return color;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = square_wave(uv);

    gl_FragColor = vec4(color, 1.0);
}
