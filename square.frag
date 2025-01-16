uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec2 leftBottom = step(vec2(0.1, 0.2), uv);
    float leftBottomBorders = leftBottom.x * leftBottom.y;

    vec2 topRight = step(vec2(0.1, 0.2), 1.0 - uv);
    float topRightBorders = topRight.x * topRight.y;

    vec3 color = vec3(topRightBorders * leftBottomBorders);

    gl_FragColor = vec4(color, 1.0);
}
