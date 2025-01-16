uniform float u_time;
uniform vec2 u_resolution;

const float pi = 3.1415;

vec3 colorA = vec3(0.0, 0.6, 0.8);
vec3 colorB = vec3(0.8, 0.3, 0.0);

vec3 colorC = vec3(0.0, 1.0, 0.7);
vec3 colorD = vec3(0.8, 0.8, 0.8);

// Sunset
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 a = vec3(sin(uv.y));

    a.x = (4.0 * sin(pi * uv.y) - cos(pi * uv.y));
    a.y = sin(pi * uv.y) / 4.0;

    vec3 sunrise = mix(colorA, colorB, a);
    vec3 sunset = mix(colorC, colorD, a);

    vec3 mixed = mix(sunrise, sunset, abs(sin(u_time * 0.4)));

    gl_FragColor = vec4(mixed, 1.0);
}
