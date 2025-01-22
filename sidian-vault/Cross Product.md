Okay this is a weird one, I can understand what things like dot product are used for but this one are weird, not only the equations looks alien as well, its just that the name. It's called a "Cross" product for some reason I am assuming its because what we did in the equation. But still. So the equation looks like this.
$$
Cx = Ay\;\times\;Bz\;-\;Az\;\times\;By
$$
$$
Cy = Az\;\times\;Bx\;-\;Ax\;\times\;Bz
$$
$$
Cz = Ax\;\times\;By\;-\;Ay\;\times\;Bx
$$
![[Screenshot 2024-10-27 at 19.20.35.png]]
This looks weird, how come this produces anything useful let alone makes any sense. But apparently this is one of the most important core concepts in computer graphics and I don't understand why.

# Explanation Attempt
![[Screenshot 2024-10-27 at 19.07.20.png]]
So according to that image, cross product will create a new vector that is perpendicular and are orthogonal (this means right-angled or 90deg) to plane defined by A and B, if you take a look at the image that red box just means right angle. Meaning if we do a cross product of A an B the resulting C will always be a right angle from both A and B. That's why when we have an orthogonal A and B crossed we get something similar to a cartesian coordinate marker. Because the result will be a Vector that is right angled to A and B.

I can see how it can be used to find normals as in the previous image we can see that C is basically the plane A,B's normal.