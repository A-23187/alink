Add the following script snippet into your .bashrc or any other shell rc files.

```shell
function alnk {
    if [ $# == 0 ]; then
        echo "usage: $FUNCNAME <url>"
        return 1
    fi
    git="git -C $HOME/MyProjects/alink" # replace with the directory of your git repo
    $git commit --allow-empty -m "$1" > /dev/null
    $git push origin main &> /dev/null
    r="https://a23187.cn/$($git rev-parse --short=6 HEAD)" # replace with your domain name
    echo "$r"
    echo "$r" | pbcopy
    return 0
}
```

