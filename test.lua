function onLoad (save_string)
    start_button = getObjectFromGUID(start_button_guid)
            start_button.createButton(button)
end

function go()
startLuaCoroutine(Global, 'setup')

end


function setup()
  getObjectFromGUID('39fd77').flip()
  getObjectFromGUID('0ceb03').setPositionSmooth({0,1.00,-9})
  getObjectFromGUID('b03e34').setPositionSmooth({0,1.01,-9})
  getObjectFromGUID('8e088e').setPositionSmooth({0,1.02,-9})
  getObjectFromGUID('11b36c').setPositionSmooth({0,1.03,-9})
 sleep(5)
 print("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
end


function sleep(n)  -- seconds
local t0 = os.clock()
while os.clock() - t0 <=   n do coroutine.yield(0) end
end