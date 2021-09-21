import random

def pickname_conc(pd1, pd2):
  return random.choice(pd1 + pd2)

def pickname_norm(pd1, pd2):
	def get_val(i):
		if i > len(pd1):
			return pd2[i % pd1]
		else:
			return pd1[i]
			
	rand_idx = random.randrange(len(pd1)+len(pd2))
	return get_val(rand_idx)
