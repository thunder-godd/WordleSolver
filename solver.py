import re
#Initialize Global vaariables
matches=[]


def get_words():
    """
    get_words
    Utility method to load the words
    and retun them as a list of strings.
    """
    # Load the file.
    with open('dictionary.txt','r') as f:
        ## This includes \n at the end of each line:
        #words = f.readlines()
    
        # This drops the \n at the end of each line:
        words = f.read().splitlines()

    return words
dictionary=get_words()

def form_pattern(correct_letters,incorrect_letters,correctly_placed):
    pattern=''
    #use correctly placed letters
    """ 
    regex pattern to match exact correctly_placed_letterrs by default 
    or include correct_letters and exclude incorrect_letters
    [(correctly_placed)]| [correct_letters^incorrect_letters]
    """    
    #pattern='[('+ correctly_placed + ')]'+'|['+ correct_letters  + '^' + incorrect_letters + ']'
    pattern=  '^('+ correctly_placed +')$'+'|['+ correct_letters  + '^' + incorrect_letters + ']'
    print(pattern)
    
    return pattern

def solver(pattern):
        for word in dictionary: #loop through dictionary
            my_match=re.match(pattern,word)#compare pattern to each word
            if my_match:
                matches.append(word)   
        return(matches)