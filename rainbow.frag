uniform vec2 u_resolution;
const float pi = 3.1415;

vec3 red = vec3(1.0, 0.0, 0.0);
vec3 yellow = vec3(1.0, 1.0, 0.0);

// TODO: Make rainbow I am stuck
void main() {
    vec2 uv = (gl_FragCoord.xy / u_resolution);

    vec3 a = vec3(mod(uv.x * 2.0, 0.5));
    // a.x = smoothstep(0.1, 0.2, a.x);
    // a.y = smoothstep(0.2, 0.3, a.y);

    // vec3 color = smoothstep(0.0, 0.5, a);

    gl_FragColor = vec4(a, 1.0);
}
