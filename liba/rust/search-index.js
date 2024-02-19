var searchIndex = new Map(JSON.parse('[\
["liba",{"doc":"An algorithm library based on C/C++ language","t":"QOOOONNNNNOOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNFFFFONNNNNNOONONNNNOHHOINNNNNNNNNNNNNNNNCNNNNNNNNNNNNNNNNNHHFNNNNOINNNNNNNNNNNNNNNNNNNONNONOOOOOOONNNNFNNOCNONNNNNNNNNNNNNNNNNNNNNNOOONOOOOOOOOOONNOFOOFFNNNNNNNNNNNNNNOOOOOOOOOOOOOOOFOFFFFFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNONNNNNNNNNNNNNNNNNHHIOOOOOOOONNNNNFOOOONNNNNNNSSSSSSSSSSSSSSSSSSSSSHHHHHHHHHHHHH","n":["PID_FUZZY_JOINT","a","a","a","ac","acc","acc","acc","acc","acc","alpha","alpha","am","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","check","crc16","crc32","crc64","crc8","de","default","default","default","default","default","den","dm","ec","eq","err","eval","eval","eval","eval","extra","f32_rsqrt","f64_rsqrt","fdb","float","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","fuzzy","ge","gen","gen","gen","gen","gen","gen","gen","gen_lsb","gen_lsb","gen_lsb","gen_lsb","gen_msb","gen_msb","gen_msb","gen_msb","gt","hash_bkdr","hash_sdbm","hpf","inc","inc","inc","input","input","int","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","iter","iter","iter","j","jer","jer","jm","joint","k","kd","kd","ki","ki","kp","kp","kpid","kpid","kpid","le","lpf","lt","major","major","mf","minor","minor","new","new","new","new","new","new","new","new","new","new","new","new","new_lsb","new_lsb","new_lsb","new_lsb","new_msb","new_msb","new_msb","new_msb","num","op","out","outmax","outmin","output","output","output","p","p","p","p0","p0","p1","p1","pa","partial_cmp","patch","pd","pid","pid","pid","pid_fuzzy","pid_neuro","pos","pos","pos","pos","pos","pos","pos","rule","run","run","run","set_den","set_joint","set_num","sum","summax","summin","t","t","ta","ta","table","table","table","table","taj","td","td","tdj","tf","third","trajbell","trajpoly3","trajpoly5","trajpoly7","trajtrap","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","tv","tweak","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","u32_sqrt","u64_sqrt","uint","v","v","v","v0","v0","v1","v1","vc","vel","vel","vel","vel","vel","version","vm","wd","wi","wp","wpid","zero","zero","zero","zero","zero","zero","CAP","CAP_ALGEBRA","CAP_BOUNDED","CUP","CUP_ALGEBRA","CUP_BOUNDED","EQU","DSIG","GAUSS","GAUSS2","GBELL","LINS","LINZ","NUL","PI","PSIG","S","SIG","TRAP","TRI","Z","dsig","gauss","gauss2","gbell","lins","linz","pi","psig","s","sig","trap","tri","z"],"q":[[0,"liba"],[313,"liba::fuzzy"],[320,"liba::mf"],[347,"core::cmp"],[348,"core::option"],[349,"core::result"],[350,"core::any"]],"d":["compute size of joint buffer for fuzzy PID controller","coefficients of acceleration","coefficients of acceleration","coefficients of acceleration","acceleration before constant velocity","calculate acceleration for bell-shaped velocity trajectory","calculate acceleration for cubic polynomial trajectory","calculate acceleration for quintic polynomial trajectory","calculate acceleration for hepta polynomial trajectory","calculate acceleration for trapezoidal velocity trajectory","filter coefficient","filter coefficient","maximum acceleration","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","algorithm library version check","Cyclic Redundancy Check for 16 bits","Cyclic Redundancy Check for 32 bits","Cyclic Redundancy Check for 64 bits","Cyclic Redundancy Check for 8 bits","acceleration after constant velocity","","","","","","get denominator for transfer function","maximum deceleration","error change","","cache error","calculate for CRC-8","calculate for CRC-16","calculate for CRC-32","calculate for CRC-64","extra number","reciprocal of square-root, $ \\\\frac{1}{\\\\sqrt{x}} $","reciprocal of square-root, $ \\\\frac{1}{\\\\sqrt{x}} $","cache feedback","floating-point number stored using <code>f64</code>","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","fuzzy PID controller operator","","generate for High Pass Filter","generate for Low Pass Filter","generate for bell-shaped velocity trajectory","generate for cubic polynomial trajectory","generate for quintic polynomial trajectory","generate for hepta polynomial trajectory","generate for trapezoidal velocity trajectory","generate for LSB CRC-8","generate for LSB CRC-16","generate for LSB CRC-32","generate for LSB CRC-64","generate for MSB CRC-8","generate for MSB CRC-16","generate for MSB CRC-32","generate for MSB CRC-64","","a hash function whose prime number is 131","a hash function whose prime number is 65599","High Pass Filter","calculate for incremental PID controller","calculate for incremental fuzzy PID controller","calculate for incremental single neuron PID controller","get input for transfer function","filter input","Equivalent to C’s int type.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","calculate for High Pass Filter","calculate for Low Pass Filter","calculate for transfer function","coefficients of jerk","calculate jerk for bell-shaped velocity trajectory","calculate jerk for hepta polynomial trajectory","maximum jerk","get joint buffer for fuzzy PID controller","proportional coefficient","derivative constant","base derivative constant","integral constant","base integral constant","proportional constant","base proportional constant","set proportional integral derivative constant for PID …","set proportional integral derivative constant for fuzzy …","set proportional integral derivative constant for single …","","Low Pass Filter","","algorithm library version major","major number","membership function","algorithm library version minor","minor number","initialize for High Pass Filter","initialize for Low Pass Filter","initialize for PID controller","initialize for fuzzy PID controller","initialize for single neuron PID controller","initialize for transfer function","initialize for bell-shaped velocity trajectory","initialize for cubic polynomial trajectory","initialize for quintic polynomial trajectory","initialize for hepta polynomial trajectory","initialize for trapezoidal velocity trajectory","initialize for version","initialize for LSB CRC-8","initialize for LSB CRC-16","initialize for LSB CRC-32","initialize for LSB CRC-64","initialize for MSB CRC-8","initialize for MSB CRC-16","initialize for MSB CRC-32","initialize for MSB CRC-64","get numerator for transfer function","set fuzzy relational operator for fuzzy PID controller","controller output","maximum output","minimum output","get output for transfer function","filter output","filter output","coefficients of position","coefficients of position","coefficients of position","initial position","initial position","final position","final position","position before constant velocity","","algorithm library version patch","position after constant velocity","proportional integral derivative controller","proportional integral derivative controller","proportional integral derivative controller","fuzzy proportional integral derivative controller","single neuron proportional integral derivative controller","calculate for positional PID controller","calculate for positional fuzzy PID controller","calculate position for bell-shaped velocity trajectory","calculate position for cubic polynomial trajectory","calculate position for quintic polynomial trajectory","calculate position for hepta polynomial trajectory","calculate position for trapezoidal velocity trajectory","set rule base for fuzzy PID controller","calculate for PID controller","calculate for fuzzy PID controller","calculate for single neuron PID controller","set denominator for transfer function","set joint buffer for fuzzy PID controller","set numerator for transfer function","controller integral output","maximum integral output","minimum integral output","total duration","total duration","acceleration phase","time before constant velocity","Cyclic Redundancy Check comparison table","Cyclic Redundancy Check comparison table","Cyclic Redundancy Check comparison table","Cyclic Redundancy Check comparison table","time-interval in which the jerk is constant (j max or j …","deceleration phase","time after constant velocity","time-interval in which the jerk is constant (j max or j …","transfer function","third number","bell-shaped velocity trajectory","cubic polynomial trajectory","quintic polynomial trajectory","hepta polynomial trajectory","trapezoidal velocity trajectory","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","constant velocity phase","algorithm library version tweak","","","","","","","","","","","","","","","","","square root of an unsigned integer","square root of an unsigned integer","Equivalent to C’s unsigned int type.","coefficients of velocity","coefficients of velocity","coefficients of velocity","initial velocity","initial velocity","final velocity","final velocity","constant velocity","calculate velocity for bell-shaped velocity trajectory","calculate velocity for cubic polynomial trajectory","calculate velocity for quintic polynomial trajectory","calculate velocity for hepta polynomial trajectory","calculate velocity for trapezoidal velocity trajectory","version","maximum velocity","derivative weight","integral weight","proportional weight","set proportional integral derivative weight for single …","zeroing for High Pass Filter","zeroing for Low Pass Filter","zeroing for PID controller","zeroing for fuzzy PID controller","zeroing for single neuron PID controller","zeroing for transfer function","min(a,b)","a*b","max(a+b-1,0)","max(a,b)","a+b-a*b","min(a+b,1)","sqrt(a,b)<em>sqrt(1-(1-a)</em>(1-b))","difference between two sigmoidal membership functions","gaussian membership function","gaussian combination membership function","generalized bell-shaped membership function","linear s-shaped saturation membership function","linear z-shaped saturation membership function","none","pi-shaped membership function","product of two sigmoidal membership functions","s-shaped membership function","sigmoidal membership function","trapezoidal membership function","triangular membership function","z-shaped membership function","difference between two sigmoidal membership functions","gaussian membership function","gaussian combination membership function","generalized bell-shaped membership function","linear s-shaped saturation membership function","linear z-shaped saturation membership function","pi-shaped membership function","product of two sigmoidal membership functions","s-shaped membership function","sigmoidal membership function","trapezoidal membership function","triangular membership function","z-shaped membership function"],"i":[0,3,4,5,6,1,3,4,5,6,26,27,1,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,14,0,0,0,0,6,9,10,11,1,6,12,1,11,14,9,16,18,20,22,14,0,0,9,0,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,0,14,26,27,1,3,4,5,6,16,18,20,22,16,18,20,22,14,0,0,0,9,10,11,12,26,0,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,26,27,12,5,1,5,1,10,11,9,10,9,10,9,10,9,10,11,14,0,14,14,14,0,14,14,26,27,9,10,11,12,1,3,4,5,6,14,16,18,20,22,16,18,20,22,12,10,9,9,9,12,26,27,3,4,5,1,6,1,6,6,14,14,6,0,10,11,0,0,9,10,1,3,4,5,6,10,9,10,11,12,10,12,9,9,9,1,6,1,6,16,18,20,22,1,1,6,1,0,14,0,0,0,0,0,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,1,14,16,18,20,22,26,27,9,10,11,12,1,3,4,5,6,14,0,0,0,3,4,5,1,6,1,6,6,1,3,4,5,6,0,1,11,11,11,11,26,27,9,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,0,0,0,0,[[1,2],2],[[3,2],2],[[4,2],2],[[5,2],2],[[6,2],2],0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[7,7,7],8],0,0,0,0,0,[[],9],[[],10],[[],11],[[],1],[[],6],[12,[[13,[2]]]],0,0,[[14,14],15],0,[[16,[13,[17]],17],17],[[18,[13,[17]],19],19],[[20,[13,[17]],21],21],[[22,[13,[17]],23],23],0,[24,24],[25,25],0,0,[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],0,[[14,14],15],[[26,2,2],26],[[27,2,2],27],[[1,2,2,2,2,2,2,2],2],[[3,2,2,2,2,2],3],[[4,2,2,2,2,2,2,2],4],[[5,2,2,2,2,2,2,2,2,2],5],[[6,2,2,2,2,2,2,2],2],[[16,17],16],[[18,19],18],[[20,21],20],[[22,23],22],[[16,17],16],[[18,19],18],[[20,21],20],[[22,23],22],[[14,14],15],[[[13,[17]],21],21],[[[13,[17]],21],21],0,[[9,2,2],2],[[10,2,2],2],[[11,2,2],2],[12,[[13,[2]]]],0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[26,2],2],[[27,2],2],[[12,2],2],0,[[1,2],2],[[5,2],2],0,[10,[[13,[17]]]],0,0,0,0,0,0,0,[[9,2,2,2],9],[[10,2,2,2],10],[[11,2,2,2,2],11],[[14,14],15],0,[[14,14],15],[[],7],0,0,[[],7],0,[[2,2],26],[[2,2],27],[[],9],[[],10],[[],11],[[[13,[2]],[13,[2]],[13,[2]],[13,[2]]],12],[[],1],[[2,2,2,2,2],3],[[2,2,2,2,2,2,2],4],[[2,2,2,2,2,2,2,2,2],5],[[],6],[[7,7,7],14],[17,16],[19,18],[21,20],[23,22],[17,16],[19,18],[21,20],[23,22],[12,[[13,[2]]]],[[10,7],10],0,0,0,[12,[[13,[2]]]],0,0,0,0,0,0,0,0,0,0,[[14,14],[[29,[28]]]],[[],7],0,0,0,0,0,0,[[9,2,2],2],[[10,2,2],2],[[1,2],2],[[3,2],2],[[4,2],2],[[5,2],2],[[6,2],2],[[10,30,[13,[2]],[13,[2]],[13,[2]],[13,[2]],[13,[2]]],10],[[9,2,2],2],[[10,2,2],2],[[11,2,2],2],[[12,[13,[2]],[13,[2]]],12],[[10,[13,[17]],30],10],[[12,[13,[2]],[13,[2]]],12],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],[-1,[[31,[-2]]],[],[]],0,[[],21],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[-1,32,[]],[21,19],[23,21],0,0,0,0,0,0,0,0,0,[[1,2],2],[[3,2],2],[[4,2],2],[[5,2],2],[[6,2],2],0,0,0,0,0,[[11,2,2,2],11],[26,26],[27,27],[9,9],[10,10],[11,11],[12,12],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[2,2,2,2,2],2],[[2,2,2],2],[[2,2,2,2,2],2],[[2,2,2,2],2],[[2,2,2],2],[[2,2,2],2],[[2,2,2,2,2],2],[[2,2,2,2,2],2],[[2,2,2],2],[[2,2,2],2],[[2,2,2,2,2],2],[[2,2,2,2],2],[[2,2,2],2]],"c":[],"p":[[5,"trajbell",0],[8,"float",0],[5,"trajpoly3",0],[5,"trajpoly5",0],[5,"trajpoly7",0],[5,"trajtrap",0],[8,"uint",0],[8,"int",0],[5,"pid",0],[5,"pid_fuzzy",0],[5,"pid_neuro",0],[5,"tf",0],[1,"slice"],[5,"version",0],[1,"bool"],[5,"crc8",0],[1,"u8"],[5,"crc16",0],[1,"u16"],[5,"crc32",0],[1,"u32"],[5,"crc64",0],[1,"u64"],[1,"f32"],[1,"f64"],[5,"hpf",0],[5,"lpf",0],[6,"Ordering",347],[6,"Option",348],[1,"usize"],[6,"Result",349],[5,"TypeId",350]],"b":[]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
