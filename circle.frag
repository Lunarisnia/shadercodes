uniform vec2 u_resolution;
uniform float u_time;

vec3 draw_circle(vec2 uv, vec2 center, float radius) {
    float pct = 0.0;
    pct = distance(uv, center);
    pct = step(radius, pct);

    return vec3(pct);
}

vec3 rotating_circles(vec2 uv) {
    vec2 center = vec2(0.5, 0.5);
    float radius = 0.1;
    float offset = 4.52;

    vec3 c1 = draw_circle(uv, center, radius) + vec3(1.0, 0.0, 0.0);
    vec3 c2 = draw_circle(uv, vec2(cos(u_time) * 0.25, sin(u_time) * 0.25) + center, radius) + vec3(0.0, 1.0, 0.0);
    vec3 c3 = draw_circle(uv, vec2(sin(offset - u_time) * 0.25, cos(offset - u_time) * 0.25) + vec2(0.5), radius) + vec3(0.0, 0.0, 1.0);

    vec3 color = vec3(c1 * c2 * c3);
    return color;
}

float easeOutElastic(float x) {
    float c4 = 2.0 * 3.1415 / 3.0;
    if (x == 0.0) {
        return 0.0;
    } else {
        if (x == 1.0) {
            return 1.0;
        } else {
            return pow(2.0, -10.0 * x) * sin((x * 10.0 - 0.75) * c4) + 1.0;
        }
    }
}

vec3 beating_circle(vec2 uv) {
    float radius = easeOutElastic(fract(u_time)) * 0.2;
    if (radius < 0.19) {
        radius = 0.19;
    }
    vec2 center = vec2(0.5);

    vec3 color = draw_circle(uv, center, radius) + vec3(0.2, 0.8, 0.4);

    return color;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    // vec3 circle = vec3(beating_circle(uv));

    // Adding the two of them will make them looks like its melting together when they're close
    float add = distance(uv, vec2(0.3)) + distance(uv, vec2(0.6));
    // This does the same thing as adding them but with greater effect, this also double as adding them both to the same scene
    float mult = distance(uv, vec2(0.3)) * distance(uv, vec2(0.6));
    // This gives a line where the two circle collide it seeems
    float minimum = min(distance(uv, vec2(0.3)), distance(uv, vec2(0.6)));
    // This will only show up if there is any colliding circle, and it shows only the specific spot where it collides
    float maximum = max(distance(uv, vec2(0.3)), distance(uv, vec2(0.6)));
    // It shows the peak of the circles (midpoint) but somehow the 2nd circle has it color inverted
    float power = pow(distance(uv, vec2(0.3)), distance(uv, vec2(0.8)));

    float pct = power;

    float spinning = distance(uv, vec2(sin(u_time) * 0.25, cos(u_time) * 0.25) + vec2(0.5));
    float c1 = distance(uv, vec2(0.5));

    vec3 color = vec3(min(c1, spinning));

    gl_FragColor = vec4(color, 1.0);
}
