uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(abs(sin(u_time)), uv.y, 0.0, 1.0);
}
