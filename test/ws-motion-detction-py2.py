import websocket
import thread
import time

from Queue import Queue

frameQueue = Queue()



def on_message(ws, message):
    #print message
    print ("message received")
    frameQueue.put_nowait(message)
    print ("Msg was added to the queue")


def on_error(ws, error):
    print error

def on_close(ws):
    print "### closed ###"

def on_open(ws):
    def run(*args):
        for i in range(3):
            time.sleep(1)
            ws.send("Hello %d" % i)
        time.sleep(1)
        ws.close()
        print "thread terminating..."
    thread.start_new_thread(run, ())

def worker():
    while True:
        item = frameQueue.get()
        print ("display message :")
        print (item)
        frameQueue.task_done()





if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://192.168.1.9:5000",
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open

    thread.start_new_thread(worker, ())

    ws.run_forever()
