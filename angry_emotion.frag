uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.539, 0.971, 1.000);
vec3 colorB = vec3(1.000, 0.0, 0.0);

float easeInOutCirc(float x) {
    return x < 0.5 ? (1.0 - sqrt(1.0 - pow(2.0 * x, 2.0))) / 2.0 : (sqrt(1.0 - pow(-2.0 * x + 2.0, 2.0)) + 1.0) / 2.0;
}

float easeInOutCircSpecial(float x) {
    return x < 0.5 ?
    (1.0 - sqrt(1.0 - pow(1.7 * (fract(x)), 5.0))) / 2.0 :
    (sqrt(1.0 - pow(-1.7 * (fract(x)) + 2.0, 9.0)) + 1.0) / 2.0;
}

void main() {
    vec3 color = vec3(0.0);

    float pct = abs(sin(u_time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, easeInOutCircSpecial(pct));

    gl_FragColor = vec4(color, 1.0);
}
