class MathDojo:

    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result+= num
        if len(nums)>=0 :
            for i in nums:
                self.result+=i
        return self

    def subtract(self, num, *nums):
        self.result-= num
        if len(nums)>=0 :
            for i in nums:
                self.result-=i
        return self


# create an instance:
md = MathDojo()
sa = MathDojo()

# to test:
md = md.add(2).add(2,5,1).subtract(3,2).result
print(md) # should print 5

x = sa.add(10).add(2,5,4).add(5,3).subtract(5,2).subtract(5).subtract(2,4,1).result
print(x)	
# run each of the methods a few more times and check the result!
