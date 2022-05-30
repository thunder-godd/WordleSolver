from flask import Flask, jsonify,  request
from flask_restful import Resource, Api
from flask_cors import CORS
from solver import  form_pattern, solver
# creating the flask app
app = Flask(__name__)
CORS(app)
# creating an API object
api = Api(app)

class Index(Resource):
    
    def get(self):
        return "hello from solver-api"



class Result(Resource):
    
    def post(self):
        json_data = request.get_json(force=True)
        correct_letters=json_data['correct']
        incorrect_letters=json_data['incorrect']
        correctly_placed=json_data['correctly_placed']
        
        cp=['','','','','']
        for i in range(len(correctly_placed)):
            if correctly_placed[i]=='':
                cp[i]='.'
            else:
                 cp[i]=correctly_placed[i]  
        
        cp=''.join(cp)
        pattern=form_pattern(correct_letters,incorrect_letters,cp)
        print(pattern)
        words=solver(pattern)
        return jsonify({'words':words})
            


# adding the defined resources along with their corresponding urls
api.add_resource(Index, '/')
api.add_resource(Result, '/result')


    
    
if __name__ == '__main__':

	app.run(debug = True)