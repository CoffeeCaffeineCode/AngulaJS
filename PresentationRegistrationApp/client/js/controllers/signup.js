angular
    .module('SignupCtrl', [])
    .controller('SignupController', function($scope, SignupService) {
        $scope.showstu = true     
        $scope.showmod=true
        
        let moduleArray = []
        let groups = []
        let stuArray=[]
        $scope.showstudent=()=> {
            $scope.showstu = $scope.showstu ? false : true
        }
        $scope.showmodule=()=> {
            $scope.showmod = $scope.showmod ? false : true
        }
        $scope.addModule = () => {
            let i
            let j
            let exists=false

            for(i=0; i<moduleArray.length; i++){                
                if($scope.modulename==moduleArray[i].name){                    
                    exists=true                    
                        for(j=0; j<groups.length; j++){
                            if(groups[j].name==$scope.modulename){
                                groups[j].id=1
                                groups[j].name=$scope.modulename + '-Group' + groups[j].id
                                groups[j].students=[]

                                groups.push({id:2,name: $scope.modulename + '-Group' + '2', students:[]}) 
                                break
                            }else if(groups[j].name.includes($scope.modulename)){                                
                                const l = groups.length + 1           
                                groups.push({id:l,name: $scope.modulename + '-Group' + l, students:[]})
                                break
                            }                            
                        }                       
                }                               	                                                                 
            }            
            if(!exists){
            	moduleArray.push({
                                name : $scope.modulename,
                                website : $scope.modulewebsite                                
                            })
                    groups.push({id: 0,name: $scope.modulename, students:[]})
            }
                $scope.moduleArray=moduleArray
                $scope.groups= groups
            }        
        $scope.signUp = () => {            
            let i
            let j            
            for(i=0; i<groups.length; i++){
            	let student ={firstname:'',lastname:'',email:''}
	            student.firstname=$scope.firstname
	            student.lastname=$scope.lastname
	            student.email=$scope.email
                if( $scope.selectedmodule==groups[i].name){                    
                    groups[i].students.push(student)
                    stuArray.push(student)
                    break
                }
            }
            $scope.groups= groups
            $scope.firstname = ""
            $scope.lastname = ""
            $scope.email =""
        }
        $scope.deleteStudent = (delstudent)=>{
            let i
            let j
            for(j=0;  j<groups.length; j++){
                for(i=0; i<groups[j].students.length; i++){                    
                    if (groups[j].students[i].email===delstudent){
                    	const index = i
	                    groups[j].students.splice(index, 1)
	                    $scope.groups= groups
                    }                   
                }
            }
            for(j=0;  j<stuArray.length; j++){                
                    const index = stuArray.indexOf(delstudent)
                    stuArray.splice(index, 1)
                    $scope.stuArray= stuArray
            }            
        }
        $scope.deleteGroup = (delgroup) =>{
            let i 
            let j
            let counter =0
            for(i=0; i<moduleArray.length; i++){                
                for(j=0;  j<groups.length; j++){
                    if(groups[j].name.includes(moduleArray[i].name)){
                        counter++
                    }
                }
                if(moduleArray.name==delgroup || counter==1){
                    const c= moduleArray.indexOf(delgroup)
                    moduleArray.splice(c, 1)                                       
                    break
                }                              
            }            
            
            const index = groups.indexOf(delgroup)
            groups.splice(index, 1)

            counter=0
            let delindex = delgroup.indexOf("-Group")
            let del= delgroup.substr(0,delindex)     
            for(j=0;  j<groups.length; j++){
                    if(groups[j].name.includes(del)){
                        counter++
                    }
                }
            if(counter==1){
	            for(k=0; k<groups.length;k++){
	            	let a= groups[k].name
		            if(a.indexOf(del)> -1){
		            	groups[k].name=a.substr(0,delindex)
		            }
	        	}
        	}
            $scope.groups= groups
            $scope.moduleArray= moduleArray
        }
    })