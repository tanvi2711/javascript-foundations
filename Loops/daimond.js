let n=9

for(let i=0;i<=n/2;i++){
    for(let s=n/2-1;s>i;s--){
        process.stdout.write("  ")
    }
    for(let j=0;j<=2*i;j++){
        process.stdout.write("* ")
    }
    console.log()
}
for(let i=n/2-1;i>=0;i--){
    for(let s=i;s<=n/2-1;s++){
        process.stdout.write("  ")
    }
    for(let j=0;j<=2*i-1;j++){
        process.stdout.write("* ")
    }
    console.log()
}