uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    float offset = abs(sin(u_time)) * 1.01;
    float idk = step(0.25, -abs(cos(u_time - 0.75)) + 1.0);
    float x = step(offset, abs(idk - uv.x));

    gl_FragColor = vec4(vec3(x), 1.0);
}
