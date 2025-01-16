uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    float feather = 0.02;

    vec2 bl = smoothstep(vec2(feather), vec2(0.1), uv);
    float bottomLeftBorders = bl.x * bl.y;

    vec2 tr = smoothstep(vec2(feather), vec2(0.1), 1.0 - uv);
    float topRightBorders = tr.x * tr.y;

    gl_FragColor = vec4(bottomLeftBorders * topRightBorders);
}
