uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec4 borders = vec4(floor(uv + vec2(0.9, 0.9)), floor(1.0 - uv + vec2(0.9, 0.9)));
    float b = borders.x * borders.y * borders.z * borders.w;

    gl_FragColor = vec4(b);
}
