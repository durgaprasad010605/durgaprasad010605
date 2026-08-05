from PIL import Image

WIDTH = 58

ASCII = "@%#*+=-:. "

img = Image.open("portrait.jpg").convert("L")

w,h = img.size

ratio = h/w

height = int(WIDTH*ratio*0.52)

img = img.resize((WIDTH,height))

pixels = img.load()

lines=[]

for y in range(height):

    line=""

    for x in range(WIDTH):

        value=pixels[x,y]

        index=int(value/255*(len(ASCII)-1))

        line+=ASCII[index]

    lines.append(line)

with open("portrait.txt","w",encoding="utf8") as f:

    f.write("\n".join(lines))

print("portrait.txt generated")
