var mapping;

try {
	mapping = 'MSH.1'; 
} catch (e) {
	mapping = '';
}

channelMap.put('transformerVar', validate( mapping , 'defaultVal', new Array()));