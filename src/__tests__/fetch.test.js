jest.unmock('isomorphic-fetch')
import fetch from 'isomorphic-fetch'

describe("Hello fetch", ()=> {

  var handleResponse;

  beforeEach(() => {
    handleResponse = {
      success: (response) => console.log(response),
      fail: (err) => console.log(err),
      ignore: (msg)=>{}
    }
    spyOn(handleResponse, 'success');
    spyOn(handleResponse, 'fail');
    spyOn(handleResponse, 'ignore');
  })

  xit("should get hcqh posts", (done)=> {
    fetch("http://hopcaquehuong.org/backend/blog.php?page=1&lang=fr")
      .then(response => {

        expect(response.ok).toBe(true)
        if (!response.ok)
          throw new Error(response.status + " "+response.statusText);

        return response;
      })
      .then(response => response.json())
      .then(json => {
        expect(json.page).toBe(1)
        handleResponse.success(json);
      })
      .catch(err=> {
        handleResponse.fail(err);
      })
      .then(()=>{
        expect(handleResponse.success.calls.any()).toBe(true)
        expect(handleResponse.fail.calls.any()).toBe(false)
        done()
      })
  })

  it("should get 404", (done)=> {
    fetch("http://hopcaquehuong.org/backend/foo.json")
      .then(response => {
        expect(response.ok).toBe(false)

        if (!response.ok)
          throw new Error(response.status + " "+response.statusText);

        handleResponse.ignore("this function should not be executed")

        return response;
      })
      .then(response => response.json())
      .then(json => {
        handleResponse.success(json);
      })
      .catch(err=> {
        handleResponse.fail(err);
      })
      .then(()=>{
        expect(handleResponse.success.calls.any()).toBe(false)
        expect(handleResponse.fail.calls.any()).toBe(true)
        expect(handleResponse.ignore.calls.any()).toBe(false)
        done()
      })
  })

})