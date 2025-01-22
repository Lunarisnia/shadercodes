```go
func calculateGCD(a, b int) int {
	for b != 0 {
		a, b = b, a % b
	}
	return a
}
```
This short and sweet algorithm is quite insane by the fact that it can find the greatest common divisor of two numbers easily. When `b` eventually be 0 the variable `a` will always contain the greatest common divisor its genius, I should use this in real life if I need to do something for this.