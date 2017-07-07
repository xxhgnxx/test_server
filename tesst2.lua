function onload(save_state)

	if save_state != '' then
		local sav = JSON.decode(save_state)
	end

tttt=getObjectFromGUID('54d5a5')


	tttt.createButton({ click_function = 'bAll',position = {2, 2, 2},label = 'All',function_owner = self,rotation = {0, 0, 0},width = 350,height = 350,font_size = 200})

end

function bAll()

startLuaCoroutine(self, 'fire')
-- fire()
end


function fire()
a = 0
sa = 22
st = 0
sz = 0

	for i, j in ipairs(tttt.getObjects()) do
				 a = a + 1
	    end
					if a == 2 then
						sa = -5
						st = 10
						sz = -12
					end
					if a == 3 then
						sa = -7.5
						st = 7.5
						sz = -12
					end
					if a == 4 then
						sa = -10
						st = 6.67
						sz = -12
          end
					if a == 5 then
					  sa = -10
						st = 5
						sz = -12
					end

params = {position = {16,8,0}, rotation = {180,0,0}}

					for i, j in ipairs(tttt.getObjects()) do
                    

							obj=getObjectFromGUID('54d5a5').takeObject(params)
							sleep(0.2)
                            obj.setPosition({16,8,0} )
							sleep(0.2)
							obj.setPositionSmooth({sa,4,sz})
							sleep(0.1)								 sa = sa + st
						end


end




function sleep(n)  -- seconds
local t0 = os.clock()
while os.clock() - t0 <=   n do coroutine.yield(0) end
end


