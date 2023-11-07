{selectedCursos.map((cursoSelect, index) => (
    <div key={index}>
      {/* Check if the cursoSelect is not in the items2 array before rendering the input */}
      {fields2.findIndex((field2) => field2.corsos === cursoSelect) === -1 && (
        <div style={{ display: "flex", width: "100%" }}>
          <Controller
            name={`items2[${index}].corsos`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  style={{ width: "40%" }}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    handleSelect2Change(value, index);
                  }}
                >
                  {selectedCursos.map((curso2, cursoIndex) => (
                    <Select.Option
                      key={cursoIndex}
                      value={curso2}
                      disabled={handleDisabledSelect(curso2, field2, fields2)}
                    >
                      {curso2}
                    </Select.Option>
                  ))}
                </Select>
              </>
            )}
          />
  
          <Controller
            name={`items2[${index}].horas`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  placeholder="Horas"
                  onChange={(value) => {
                    field.onChange(value);
                    setDesactivarSubmit(!!value);
                  }}
                />
              </div>
            )}
          />
  
          <Button type="button" onClick={() => handleGuardarClick(index)}>
            <DeleteFilled
              style={{ fontSize: "14px", color: "#b91010cc" }}
            />
          </Button>
        </div>
      )}
    </div>
  ))}
  