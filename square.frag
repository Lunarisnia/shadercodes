uniform vec2 u_resolution;

vec3 draw_square(vec2 uv, float x1, float y1, float w, float h) {
    vec4 borders = vec4(step(vec2(x1, y1), uv), step(vec2(1.0 - w, 1.0 - h), 1.0 - uv));
    vec3 square = vec3(borders.x * borders.y * borders.z * borders.w);
    return square;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = draw_square(uv, 0.1, 0.1, 0.8, 0.8);

    gl_FragColor = vec4(color, 1.0);
}
