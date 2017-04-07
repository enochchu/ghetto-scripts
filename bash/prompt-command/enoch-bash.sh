export LSCOLORS=gxfxcxdxbxegedabagacad

function find_git_branch {
		local dir=. head
		until [ "$dir" -ef / ]; do
				if [ -f "$dir/.git/HEAD" ]; then
						head=$(< "$dir/.git/HEAD")
						if [[ $head == ref:\ refs/heads/* ]]; then
								git_branch=" [${head#*/*/}]"
						elif [[ $head != '' ]]; then
								git_branch='[(detached)] '
						else
								git_branch='[(unknown)] '
						fi
						return
				fi
				dir="../$dir"
		done
		git_branch=''
}

function munge_path {
		munged_path=`ruby -e "y='$PWD'.sub('$HOME','~');x='';p=y.split('/');x+='.../' if p.length > 4; x+=p[[0,p.length-4].max,p.length].join('/');x+='/' if p.length==0;if x.length < y.length then print x; else print y; end;"`
}

RS="\[\033[0m\]"    # reset
BOLD="\[\033[38;5;220m\]"

PS1="\[\033[35m\]\t\[\033[m\]-\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]${RS}${BOLD}\$git_branch${RS}\n${BOLD} ➥${RS}  "
PROMPT_COMMAND="munge_path; find_git_branch; $PROMPT_COMMAND"
